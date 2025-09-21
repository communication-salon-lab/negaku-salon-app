
import React, { useEffect, useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import 'chart.js/auto';

const API = 'https://1riddswy22.execute-api.ap-northeast-1.amazonaws.com/default';

export default function TrendChart({ rangeHours = 24 }) {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // データ取得
  useEffect(() => {
    const fetchData = () => {
      const from = dayjs().subtract(rangeHours, 'hour').toISOString();
      const to = dayjs().toISOString();
      fetch(`${API}/trend?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`)
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        })
        .then((d) => {
          setPoints(Array.isArray(d.points) ? d.points : []);
          setErr(null);
        })
        .catch((e) => setErr(e.message || 'fetch error'))
        .finally(() => setLoading(false));
    };
    fetchData();
    const id = setInterval(fetchData, 60 * 1000); // 1分毎に更新
    return () => clearInterval(id);
  }, [rangeHours]);

  // Y軸の上限に少し余白を作る
  const yMax = useMemo(() => {
    const m = Math.max(0, ...points.map((p) => Number(p.count) || 0));
    return m <= 3 ? 3 : m + 1;
  }, [points]);

  // Chart.js scriptableオプションでキャンバス依存のグラデーションを作る
  const chartData = useMemo(() => {
    const counts = points.map((p) => p.count);
    const labels = points.map((p) =>
      rangeHours <= 6 ? dayjs(p.ts).format('HH:mm') : dayjs(p.ts).format('MM/DD HH:mm')
    );

    return {
      labels,
        datasets: [
          {
            label: '人数',
            data: counts,

            cubicInterpolationMode: 'monotone',
            tension: 0.35,
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 5,
            hitRadius: 8,
            fill: true,

            borderColor: (ctx) => {
              const { chart } = ctx;
              const { ctx: c } = chart;
              return c ? 'rgba(34,197,94,1)': undefined;
            },
            backgroundColor: (ctx) => {
              const { chart } = ctx;
              const { ctx: c, chartArea } = chart || {};
              if (!c || !chartArea) return undefined;
              const g = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
              g.addColorStop(0, 'rgba(34,197,94,0.28)');
              g.addColorStop(1, 'rgba(34,197,94,0.04)');
              return g;
            }
          }
        ]
    };
  }, [points, rangeHours]);

  const options = useMemo(
    () => ({
      animation: { duration: 300 },
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      spanGaps: true,
      elements: { line: { tension: 0.35 } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { maxRotation: 0, autoSkip: true, autoSkipPadding: 12 }
        },
        y: {
          beginAtZero: true,
          suggestedMax: yMax,
          ticks: { precision: 0 },
          grid: {
            drawBorder: false,
            color: (ctx) => (ctx.index % 2 === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.03)')
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: { boxWidth: 12, boxHeight: 12, usePointStyle: true, pointStyle: 'line' }
        },
        tooltip: {
          usePointStyle: true,
          callbacks: {
            title: (items) => {
              const i = items[0];
              const ts = points[i.dataIndex]?.ts;
              return ts ? dayjs(ts).format('MM/DD HH:mm') : '';
            },
            label: (ctx) => `人数: ${ctx.parsed.y} 人`
          }
        }
      }
    }),
    [points, yMax]
  );

  return (
    <div className="w-full max-w-5xl mx-auto my-8 px-4">
      <div className="card bg-white shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">
            本日の人数推移
          </h3>

          {loading && <p className="text-gray-500">読み込み中…</p>}
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
