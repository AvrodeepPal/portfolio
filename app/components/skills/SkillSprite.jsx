'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { SPRITE_URL } from '@/app/assets/skills/sprite-version';

const SpriteReadyContext = createContext(false);

/** True once the skills sprite is in the document and `<use href="#id">` resolves. */
export const useSpriteReady = () => useContext(SpriteReadyContext);

/**
 * Fetches the skills sprite once (one cached request) and inlines it, so tiles
 * can reference symbols in the same document. Safari can't draw gradients
 * through an external `<use href="file.svg#id">`, which is why the file isn't
 * referenced directly.
 */
export default function SkillSprite({ children }) {
  const [markup, setMarkup] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetch(SPRITE_URL)
      .then((res) => (res.ok ? res.text() : ''))
      .then((text) => !cancelled && setMarkup(text))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SpriteReadyContext.Provider value={Boolean(markup)}>
      {/* Zero-size rather than display:none, which would also disable the gradients. */}
      <div
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      {children}
    </SpriteReadyContext.Provider>
  );
}
