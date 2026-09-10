'use client';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

const cx = (...classes) => classes.filter(Boolean).join(' ');

/**
 * Aceternity's glowing border effect, ported to this project's stack:
 * `framer-motion` instead of `motion/react`, no `cn()` dependency, and the
 * gradient recoloured to the portfolio's red -> gold palette.
 *
 * A conic-gradient border is masked down to a moving arc that tracks the
 * pointer, so the card lights up along the edge nearest the cursor.
 */
const GlowingEffect = memo(function GlowingEffect({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = 'default',
  glow = false,
  className,
  movementDuration = 2,
  borderWidth = 1,
  disabled = true
}) {
  const containerRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(0);

  const handleMove = useCallback(
    (e) => {
      if (!containerRef.current) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const element = containerRef.current;
        if (!element) return;

        const { left, top, width, height } = element.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) {
          lastPosition.current = { x: mouseX, y: mouseY };
        }

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceFromCenter = Math.hypot(
          mouseX - center[0],
          mouseY - center[1]
        );
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          element.style.setProperty('--active', '0');
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        element.style.setProperty('--active', isActive ? '1' : '0');

        if (!isActive) return;

        const currentAngle =
          parseFloat(element.style.getPropertyValue('--start')) || 0;
        const targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI +
          90;

        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        animate(currentAngle, newAngle, {
          duration: movementDuration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (value) => {
            element.style.setProperty('--start', String(value));
          }
        });
      });
    },
    [inactiveZone, proximity, movementDuration]
  );

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => handleMove();
    const handlePointerMove = (e) => handleMove(e);

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('pointermove', handlePointerMove, {
      passive: true
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, [handleMove, disabled]);

  return (
    <>
      <div
        className={cx(
          'pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity',
          glow && 'opacity-100',
          variant === 'white' && 'border-white',
          disabled && 'block!'
        )}
      />

      <div
        ref={containerRef}
        style={{
          '--blur': `${blur}px`,
          '--spread': spread,
          '--start': '0',
          '--active': '0',
          '--glowingeffect-border-width': `${borderWidth}px`,
          '--repeating-conic-gradient-times': '5',
          '--gradient':
            variant === 'white'
              ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--fg),
                  var(--fg) calc(25% / var(--repeating-conic-gradient-times))
                )`
              : `radial-gradient(circle, #ffe31f 10%, #ffe31f00 20%),
                 radial-gradient(circle at 40% 40%, #FFD000 5%, #FFD00000 15%),
                 radial-gradient(circle at 60% 60%, #F00F00 10%, #F00F0000 20%),
                 radial-gradient(circle at 40% 60%, #fdd017 10%, #fdd01700 20%),
                 repeating-conic-gradient(
                   from 236.84deg at 50% 50%,
                   #F00F00 0%,
                   #FFD000 calc(25% / var(--repeating-conic-gradient-times)),
                   #FFCE00 calc(50% / var(--repeating-conic-gradient-times)),
                   #ffe31f calc(75% / var(--repeating-conic-gradient-times)),
                   #F00F00 calc(100% / var(--repeating-conic-gradient-times))
                 )`
        }}
        className={cx(
          'pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity',
          glow && 'opacity-100',
          blur > 0 && 'blur-[var(--blur)]',
          className,
          disabled && 'hidden!'
        )}
      >
        <div
          className={cx(
            'glow rounded-[inherit]',
            'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
            'after:[border:var(--glowingeffect-border-width)_solid_transparent]',
            'after:[background:var(--gradient)] after:[background-attachment:fixed]',
            'after:opacity-[var(--active)] after:transition-opacity after:duration-300',
            'after:[mask-clip:padding-box,border-box]',
            'after:[mask-composite:intersect]',
            'after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]'
          )}
        />
      </div>
    </>
  );
});

export { GlowingEffect };
export default GlowingEffect;
