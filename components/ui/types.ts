export interface CarouselSlide {
  title: string;
  description: string;
  image: string;
}

export interface CarouselCardProps {
  slide: CarouselSlide;
  isActive: boolean;
  onClick: () => void;
}
