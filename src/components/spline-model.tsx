"use client";

// Since spline-viewer is a custom element, we need to declare its type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string; }, HTMLElement>;
    }
  }
}

export function SplineModel() {
    return (
        <section className="h-[500px] w-full">
             <spline-viewer url="https://prod.spline.design/CGTOHKA0m4IbK6xs/scene.splinecode"></spline-viewer>
        </section>
    )
}