import React, { useEffect, useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import 'chart.js/auto';

const API = 'https://1riddswy22.execute-api.ap-northeast-1.amazonaws.com/default';

export default function TrendChart() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(`${API}/trend`)
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        })
        .then((d) => {
          const raw = Array.isArray(d.points) ? d.points : [];
          const sorted = raw
            .filter((p) => p && p.ts != null && Number.isFinite(Number(p.count)))
            .sort((a, b) => new Date(a.ts).getTime() - new Date(b.ts).getTime());
          setPoints(sorted);
          setErr(null);
        })
        .catch((e) => setErr(e.message || 'fetch error'))
        .finally(() => setLoading(false));
    };
    fetchData();
    const id = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const yMax = useMemo(() => {
    const m = Math.max(0, ...points.map((p) => Number(p.count) || 0));
    return m <= 3 ? 3 : m + 1;
  }, [points]);

  const chartData = useMemo(() => {
    const counts = points.map((p) => Number(p.count) || 0);
    const labels = points.map((p) => dayjs(p.ts).format('HH:mm'));
    return {
      labels,
      datasets: [
        {
          label: '人数',
          data: counts,
          cubicInterpolationMode: 'monotone',
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          hitRadius: 8,
          fill: true,
          borderColor: 'rgba(34,197,94,1)',
          backgroundColor: (ctx) => {
            const { ctx: c, chartArea } = ctx.chart || {};
            if (!c || !chartArea) return 'rgba(34,197,94,0.15)';
            const g = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            g.addColorStop(0, 'rgba(34,197,94,0.28)');
            g.addColorStop(1, 'rgba(34,197,94,0.04)');
            return g;
          },
        },
      ],
    };
  }, [points]);

  const options = useMemo(
    () => ({
      animation: { duration: 300 },
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      spanGaps: true,
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 12,
          },
        },
        y: {
          beginAtZero: true,
          suggestedMax: yMax,
          ticks: { precision: 0, stepSize: 5 },
          grid: { color: 'rgba(0,0,0,0.06)' },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: { boxWidth: 12, boxHeight: 12, usePointStyle: true, pointStyle: 'line' },
        },
        tooltip: {
          usePointStyle: true,
          callbacks: {
            title: (items) => {
              const ts = points[items[0].dataIndex]?.ts;
              return ts ? dayjs(ts).format('MM/DD HH:mm') : '';
            },
            label: (ctx) => `人数: ${ctx.parsed.y} 人`,
          },
        },
      },
    }),
    [points, yMax]
  );

  return (
    <div className="w-full max-w-5xl mx-auto my-8 px-4">
      <div className="card bg-white shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">
            本日の人数推移（9:00〜21:00）
          </h3>
          {!loading && err && <p className="text-red-600">エラー: {err}</p>}
          {!loading && !err && points.length === 0 && (
            <p className="text-gray-500">データがありません。</p>
          )}
          {!loading && !err && points.length > 0 && (
            <div className="h-64 md:h-80 lg:h-96">
              <Line data={chartData} options={options} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}