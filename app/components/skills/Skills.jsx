'use client';
import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-auto gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Coding</h3>
          {/* Map tiles from coding.json here */}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Development</h3>
          {/* Map tiles from dev.json here */}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          {/* Map tiles from tools.json here */}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          {/* Map tiles from tech.json here */}
        </div>
      </div>
    </section>
  );
}
