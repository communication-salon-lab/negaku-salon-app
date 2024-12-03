import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * 子要素を下からフェードインさせる
 *
 * @example
 * ```jsx
 * <FadeInBottom>
 *  <div>フェードインする要素</div>
 * </FadeInBottom>
 * ```
 */
export const FadeInBottom = ({ children }) => {
  const { ref, inView } = useInView({
    // ref要素が現れてから50px過ぎたら
    rootMargin: "-50px",
    // 最初の一度だけ実行
    triggerOnce: true,
  });

  const fadeInClassName = inView ? "animate-fade-in-bottom" : "opacity-0";

  const wrappedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const className = [child.props.className, fadeInClassName]
        .filter(el => el)
        .join(" ");

      return React.cloneElement(child, {
        ref,
        className,
      });
    } else {
      return child;
    }
  });

  return <>{wrappedChildren}</>;
};