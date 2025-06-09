'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Slide {
  id: string;
  number: string;
  title: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: '1',
    number: '01',
    title: 'Research & Planning',
    image: '/sliderImage/3.jpg',
  },
  {
    id: '2',
    number: '02',
    title: 'Brainstorm & Wirefirm',
    image: '/sliderImage/1.jpg',
  },
  {
    id: '3',
    number: '03',
    title: 'Design & Development',
    image: '/sliderImage/2.jpg',
  },
  {
    id: '4',
    number: '04',
    title: 'Design & Development',
    image: '/sliderImage/1.jpg',
  },
];

export function WorkProcessSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="md:flex items-end justify-between">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
              HOW WE WORK
            </span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
              Our Unique
              <br />
              Work Process.
            </h2>
          </div>
          <div className="space-x-3">
            <button
              onClick={previousSlide}
              className={cn(
                ' left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-black/50 p-2 text-white transition-all hover:bg-black/75',
                currentSlide === 0 && 'opacity-50'
              )}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className={cn(
                ' right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-black/50 p-2 text-white transition-all hover:bg-black/75',
                currentSlide === slides.length - 1 && 'opacity-50'
              )}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className={`transition-transform duration-500 ease-in-out `}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              display: 'flex',
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full flex-shrink-0 space-y-4"
              >
                <div className="relative">
                  <div className="absolute left-0 top-0 z-10 bg-black/80 p-4 text-white">
                    <span className="text-6xl font-bold opacity-20">
                      {slide.number}
                    </span>
                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                  </div>
                  <Image
                    width={600}
                    height={400}
                    src={slide.image}
                    alt={slide.title}
                    className="h-[600px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
