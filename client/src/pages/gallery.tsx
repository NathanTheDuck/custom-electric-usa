import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Construction } from "lucide-react";
import companyLogo from "@assets/custom-sign_1770907979564.jpg";

import hartfordHospitalLobby from "@assets/customelectric/HH-Lobby-2.jpg";
import hh5 from "@assets/customelectric/hh5.jpg";
import hh6 from "@assets/customelectric/hh6.jpg";
import hh7 from "@assets/customelectric/hh7.jpg";
import hhFitness from "@assets/customelectric/HH fitness center.jpg";
import hartfordExamRoom from "@assets/customelectric/hartfordED_c_ExamRoom.jpg";
import boneAndJoint from "@assets/customelectric/hc-ed-bone-and-joint-institute-1116-20161115.jpg";
import catScan from "@assets/customelectric/cat scan.jpg";
import vernonHealth from "@assets/customelectric/Vernon_Family_Health_Center-01.jpg";
import stFrancis from "@assets/customelectric/St__Francis_Hospital,_114_Woodland_Street_in_Hartford,_Connecticut,_2009-09-02.jpg";

import gehms03 from "@assets/customelectric/FletcherThompson_GEHMS_03a.jpg";
import gehms05 from "@assets/customelectric/FletcherThompson_GEHMS_05a.jpg";
import gehms10 from "@assets/customelectric/FletcherThompson_GEHMS_10.jpg";
import gehems1 from "@assets/customelectric/gehems (1).jpg";
import gehems2 from "@assets/customelectric/gehems (2).jpg";
import gehems3 from "@assets/customelectric/gehems (3).jpg";
import gehems4 from "@assets/customelectric/gehems (4).jpg";
import gehems15 from "@assets/customelectric/gehems (15).jpg";
import eastHartford from "@assets/customelectric/east-hartford_glastonbury_ms.jpg";
import eastHartford3 from "@assets/customelectric/east-hartford_glastonbury_ms3.jpg";
import foxSchool2 from "@assets/customelectric/Fox_school_2.jpg";
import foxSchool3 from "@assets/customelectric/Fox_school_3.jpg";
import foxSchool4 from "@assets/customelectric/Fox_school_4.jpg";
import mdFox1 from "@assets/customelectric/md fox (1).jpg";
import mdFox2 from "@assets/customelectric/md fox (2).jpg";
import mdFox4 from "@assets/customelectric/md fox (4).jpg";
import k12Fox from "@assets/customelectric/k12-mdfox-3.jpg";
import hartfordCCMS from "@assets/customelectric/HartfordCCMS.jpg";
import magnetSchool from "@assets/customelectric/hc-ed-wrong-about-too-many-magnet-schools-0127-20160127.jpg";
import journalism from "@assets/customelectric/journalism-media-magnet-academy-hs-1.jpg";
import capitolPrep from "@assets/customelectric/capitol prep tunnel 006.jpg";
import wjjms from "@assets/customelectric/WJJMS.jpg";
import wjjms5 from "@assets/customelectric/WJJMS5.jpg";
import weaver from "@assets/customelectric/weaver2.jpg";

import ccsu2 from "@assets/customelectric/ccsu2.jpg";
import ccsu6 from "@assets/customelectric/ccsu6.jpg";
import ctScience from "@assets/customelectric/CT Science Center.jpg";
import dhs from "@assets/customelectric/DHS.jpg";
import trinity from "@assets/customelectric/trinity2.jpg";
import prospect3 from "@assets/customelectric/prospect (3).jpg";
import prospect4 from "@assets/customelectric/prospect (4).jpg";
import prospect6 from "@assets/customelectric/prospect (6).jpg";
import midstate from "@assets/customelectric/Midstate.jpg";
import midstate1 from "@assets/customelectric/Midstate (1).jpg";
import megsStore from "@assets/customelectric/Meg_s Store (2).jpg";
import emmett from "@assets/customelectric/emmett3.jpg";
import uchcGarage from "@assets/customelectric/uchc garage-3.jpg";
import bigUn from "@assets/customelectric/Big_un16lfhmaKs1BdJP7HSesyOUTJSNAcW8mU9gsSl06Ag.jpg";
import ar170 from "@assets/customelectric/AR-170729574.jpg";

type PhotoCategory = {
  id: string;
  name: string;
  description: string;
  photos: { src: string; caption: string }[];
};

const categories: PhotoCategory[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Hospitals, medical centers, and healthcare facilities across Connecticut",
    photos: [
      { src: hartfordHospitalLobby, caption: "Hartford Hospital - Main Lobby" },
      { src: hh7, caption: "Hartford Hospital - Interior" },
      { src: hhFitness, caption: "Hartford Hospital - Fitness Center" },
      { src: hh5, caption: "Hartford Hospital - Facility" },
      { src: hh6, caption: "Hartford Hospital - Building" },
      { src: hartfordExamRoom, caption: "Hartford Hospital - Exam Room" },
      { src: boneAndJoint, caption: "Bone & Joint Institute" },
      { src: catScan, caption: "CT Scan Installation" },
      { src: vernonHealth, caption: "Vernon Family Health Center" },
      { src: stFrancis, caption: "St. Francis Hospital, Hartford" },
    ],
  },
  {
    id: "education",
    name: "Education",
    description: "Schools, magnet academies, and educational institutions",
    photos: [
      { src: gehms03, caption: "Glastonbury-East Hartford Magnet School" },
      { src: gehms05, caption: "GEHMS - Interior" },
      { src: gehms10, caption: "GEHMS - Facility" },
      { src: gehems1, caption: "GEHMS - Construction" },
      { src: gehems2, caption: "GEHMS - Electrical Work" },
      { src: gehems3, caption: "GEHMS - Installation" },
      { src: gehems4, caption: "GEHMS - Systems" },
      { src: gehems15, caption: "GEHMS - Completed" },
      { src: eastHartford, caption: "East Hartford/Glastonbury Middle School" },
      { src: eastHartford3, caption: "East Hartford/Glastonbury - Interior" },
      { src: foxSchool2, caption: "Fox School" },
      { src: foxSchool3, caption: "Fox School - Interior" },
      { src: foxSchool4, caption: "Fox School - Exterior" },
      { src: mdFox1, caption: "M.D. Fox School" },
      { src: mdFox2, caption: "M.D. Fox School - View 2" },
      { src: mdFox4, caption: "M.D. Fox School - View 3" },
      { src: k12Fox, caption: "M.D. Fox School - K-12" },
      { src: hartfordCCMS, caption: "Hartford CCMS" },
      { src: magnetSchool, caption: "Hartford Magnet School" },
      { src: journalism, caption: "Journalism & Media Magnet Academy" },
      { src: capitolPrep, caption: "Capitol Prep - Tunnel" },
      { src: wjjms, caption: "WJJMS" },
      { src: wjjms5, caption: "WJJMS - Interior" },
      { src: weaver, caption: "Weaver High School" },
    ],
  },
  {
    id: "municipal",
    name: "Municipal & Commercial",
    description: "Government buildings, commercial properties, and public facilities",
    photos: [
      { src: ccsu2, caption: "CCSU - Central CT State University" },
      { src: ccsu6, caption: "CCSU - Campus Facility" },
      { src: ctScience, caption: "CT Science Center" },
      { src: dhs, caption: "Department of Human Services" },
      { src: trinity, caption: "Trinity College" },
      { src: prospect3, caption: "Prospect Facility" },
      { src: prospect4, caption: "Prospect - Interior" },
      { src: prospect6, caption: "Prospect - Electrical Work" },
      { src: midstate, caption: "Midstate Medical" },
      { src: midstate1, caption: "Midstate Medical - View 2" },
      { src: megsStore, caption: "Lighting" },
      { src: emmett, caption: "Emmett O'Brien Technical School" },
      { src: uchcGarage, caption: "UCHC Parking Garage" },
      { src: bigUn, caption: "Large Commercial Project" },
      { src: ar170, caption: "Commercial Installation" },
    ],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxPhotos, setLightboxPhotos] = useState<{ src: string; caption: string }[]>([]);

  const allPhotos = categories.flatMap((c) =>
    c.photos.map((p) => ({ ...p, category: c.name }))
  );

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  const openLightbox = (photos: { src: string; caption: string }[], index: number) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxPhotos([]);
  };

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < lightboxPhotos.length) {
      setLightboxIndex(newIndex);
    }
  };

  const totalPhotos = allPhotos.length;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 md:px-8">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={companyLogo} alt="Custom Electric Inc" className="h-10 w-auto rounded-md object-cover" />
              <span className="text-xl font-bold">Custom Electric Inc</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline" data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="bg-primary text-primary-foreground py-3 px-6 text-center" data-testid="banner-under-construction">
        <div className="flex items-center justify-center gap-2">
          <Construction className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            Website Under Construction — We are updating our site. Please check back soon for a refreshed experience.
          </p>
          <Construction className="h-5 w-5 flex-shrink-0" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3" data-testid="text-gallery-title">Job Photos</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse {totalPhotos}+ photos from our projects across Connecticut. From hospitals and schools
            to industrial facilities and municipal buildings.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            data-testid="filter-all"
          >
            All Projects ({totalPhotos})
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`filter-${cat.id}`}
            >
              {cat.name} ({cat.photos.length})
            </Button>
          ))}
        </div>

        {filteredCategories.map((category) => (
          <section key={category.id} className="mb-12">
            <div className="mb-6">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl font-bold" data-testid={`text-category-${category.id}`}>
                  {category.name}
                </h2>
                <Badge variant="secondary">{category.photos.length} photos</Badge>
              </div>
              <p className="text-muted-foreground mt-1">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {category.photos.map((photo, index) => (
                <Card
                  key={index}
                  className="overflow-visible group cursor-pointer hover-elevate"
                  onClick={() => openLightbox(category.photos, index)}
                  data-testid={`photo-${category.id}-${index}`}
                >
                  <div className="aspect-square overflow-hidden rounded-md">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-xs text-muted-foreground truncate">{photo.caption}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Custom Electric Inc. All rights reserved. CT License #104587
          </p>
        </div>
      </footer>

      {lightboxIndex !== null && lightboxPhotos.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-md"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {lightboxIndex > 0 && (
            <button
              className="absolute left-4 text-white p-2 rounded-md"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {lightboxIndex < lightboxPhotos.length - 1 && (
            <button
              className="absolute right-4 text-white p-2 rounded-md"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          <div
            className="max-w-4xl max-h-[85vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxPhotos[lightboxIndex].src}
              alt={lightboxPhotos[lightboxIndex].caption}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
              data-testid="lightbox-image"
            />
            <p className="text-white text-center mt-4 text-sm">
              {lightboxPhotos[lightboxIndex].caption}
              <span className="text-white/50 ml-2">
                ({lightboxIndex + 1} / {lightboxPhotos.length})
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
