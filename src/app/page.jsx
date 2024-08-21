"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/16/solid";
import { useRouter } from "next/router";
import {
  heroComponents,
  logoCloudComponents,
  featureComponents,
  statsComponents,
  ctaComponents,
  footerComponents,
  seedComponents,
} from "../utils/dynamicImports";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";
import { useComponentsContext } from "@/contexts/ComponentsContext";
import Container from "@/components/ui/Container";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/ui/description-list";
import { Field, Label } from "@/components/ui/fieldset";
import { Textarea } from "@/components/ui/textarea";
import { StackedLayout } from "@/components/ui/stacked-layout";
import RootNavbar from "@/components/RootNavbar";
import RootSidebar from "@/components/RootSidebar";
const Page = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const { components } = useComponentsContext();
  const [url, setUrl] = useState("/");
  const [customUrl, setCustomUrl] = useState("");

  // let vw = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );
  const calculateWidth = () => {
    if (typeof window !== "undefined") {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      console.log("vw: ", vw);
      return vw >= 1440
        ? 1296
        : vw >= 1024
        ? vw - 64
        : vw >= 640
        ? vw - 48
        : vw - 32;
    }
  };

  const [iframeWidth, setIframeWidth] = useState(calculateWidth()); // Default width
  const resizerRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false); // Tracks window resize
  const [isManualResize, setIsManualResize] = useState(false); // Track iframe resizing

  // Function to calculate the iframe width based on the current viewport width

  useEffect(() => {
    const handleResize = () => {
      if (!isManualResize) {
        setIframeWidth(calculateWidth());
      }
    };

    // If not currently resizing manually, listen to window resize events
    if (!isResizing) {
      window.addEventListener("resize", handleResize);
    }

    // Cleanup listener on component unmount or when resizing starts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isResizing, isManualResize]);

  // Handle mouse down on the resizer
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    setIsManualResize(true);

    const startX = e.clientX;
    const startWidth = iframeWidth;

    const handleMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      const maxIframeWidth = calculateWidth();
      if (newWidth >= 360 && newWidth <= maxIframeWidth) {
        setIframeWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      setIsManualResize(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const loadComponents = (preview) => {
    const randomHeroIdx = Math.floor(
      Math.random() * components.heroComponents.length
    );
    const randomLogoCloudIdx = Math.floor(
      Math.random() * components.logoCloudComponents.length
    );
    const randomFeatureIdx = Math.floor(
      Math.random() * components.featureComponents.length
    );
    const randomStatsIdx = Math.floor(
      Math.random() * components.statsComponents.length
    );
    const randomCTAIdx = Math.floor(
      Math.random() * components.ctaComponents.length
    );
    const randomFooterIdx = Math.floor(
      Math.random() * components.footerComponents.length
    );

    if (preview) {
      setCustomUrl(
        `hero-${randomHeroIdx}-logocloud-${randomLogoCloudIdx}-feature-${randomFeatureIdx}-stats-${randomStatsIdx}-cta-${randomCTAIdx}-footer-${randomFooterIdx}`
      );
      return;
    }

    setUrl(
      `/preview/hero-${randomHeroIdx}-logocloud-${randomLogoCloudIdx}-feature-${randomFeatureIdx}-stats-${randomStatsIdx}-cta-${randomCTAIdx}-footer-${randomFooterIdx}`
    );
    console.log("Generated URL:", url);
  };

  return (
    <StackedLayout
      navbar={<RootNavbar />}
      sidebar={<RootSidebar />}
      className="dark"
    >
      <div className="  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 place-items-center pt-32">
        <div className="lg:w-96 col-span-2">
          <Subheading className="flex flex-col ">
            Components
            <span className="text-xs">format: componentname-idx</span>
            <span className="text-xs">idx starts at 0</span>
          </Subheading>
          <DescriptionList className="mt-4">
            <DescriptionTerm className="flex flex-col">
              Hero Sections
              <span className="-mt-1 text-xs">code: hero-idx</span>
            </DescriptionTerm>
            <DescriptionDetails>12 components</DescriptionDetails>

            <DescriptionTerm className="flex flex-col">
              Logo Clouds
              <span className="-mt-1 text-xs">code: logocloud-idx</span>
            </DescriptionTerm>
            <DescriptionDetails>12 components</DescriptionDetails>

            <DescriptionTerm className="flex flex-col">
              Feature Sections
              <span className="-mt-1 text-xs">code: feature-idx</span>
            </DescriptionTerm>
            <DescriptionDetails>18 components</DescriptionDetails>

            <DescriptionTerm className="flex flex-col">
              Stats
              <span className="-mt-1 text-xs">code: stats-idx</span>
            </DescriptionTerm>
            <DescriptionDetails>10 components</DescriptionDetails>

            <DescriptionTerm className="flex flex-col">
              CTA Sections
              <span className="-mt-1 text-xs">code: cta-idx</span>
            </DescriptionTerm>
            <DescriptionDetails>11 components</DescriptionDetails>

            <DescriptionTerm className="flex flex-col">
              Footers
              <span className="-mt-1 text-xs">code: footer-idx</span>
            </DescriptionTerm>
            <DescriptionDetails>10 components</DescriptionDetails>
          </DescriptionList>
        </div>
        <div className="gap-y-3 col-span-3 flex flex-col items-center lg:min-w-[600px] ">
          <Heading>Landing Page Generator</Heading>
          <Button onClick={() => loadComponents(false)}>Generate Page</Button>
          <Link
            href={url}
            className="text-blue-500 underline hover:text-blue-800"
            target="_blank"
          >
            {url}
          </Link>
        </div>

        {/* place-items-center h-screen */}
        {/* min w 91vw prevents resizing frame from shifting layout */}
        {/* border border-red-500 */}
        <div className="flex min-w-full  overflow-x-hidden col-span-1 sm:col-span-3 lg:col-span-5 flex-wrap justify-center py-32  no-scrollbar sm:min-w-[91vw] 2xl:min-w-[94vw]">
          {/* border border-blue-500 */}
          <div className=" flex p-10 justify-center ">
            <Field className=" flex flex-col max-w-xs sm:max-w-sm ">
              <Label>Create a custom page</Label>
              <Textarea
                name="description"
                className=" sm:w-96 rounded-lg h-40 text-gray-700 text-sm"
                placeholder="hero-10-logocloud-4-feature-3-stats-4-feature-8-cta-9-footer-3"
                onChange={(e) => setCustomUrl(e.target.value)}
                value={customUrl}
              />
              <div className="flex self-center gap-x-3 mt-2">
                <Button onClick={() => setIframeWidth(360)}>
                  <DevicePhoneMobileIcon />
                  Mobile
                </Button>
                <Button onClick={() => setIframeWidth(768)}>
                  <DeviceTabletIcon />
                  Tablet
                </Button>
                <Button onClick={() => setIframeWidth(1296)}>
                  <ComputerDesktopIcon />
                  Desktop
                </Button>
              </div>
              <Button
                className="mt-4  self-center"
                onClick={() => {
                  loadComponents(true);
                  console.log("customUrl: ", customUrl);
                }}
              >
                Generate Page
              </Button>
            </Field>
          </div>
          <div
            className={
              // border border-orange-500
              // border border-green-500
              iframeWidth < 1095 ? " flex-1 " : " mx-auto 3xl:flex-1"
            }
          >
            {console.log("iframeWidth: ", iframeWidth)}
            <div className=" relative " style={{ width: `${iframeWidth}px` }}>
              <iframe
                src={`/preview/${customUrl}`}
                // src="https://tailwindcss.com/docs/screens"
                className="w-full h-[90vh] rounded-lg ring-1 no-scrollbar ring-slate-900/10"
                title="Live Preview"
                loading="lazy"
              ></iframe>

              {/* Resizer Handle */}
              <div
                onMouseDown={handleMouseDown}
                className="absolute top-0 right-0 h-full w-4  cursor-ew-resize "
                ref={resizerRef}
              />
              {/* Transparent overlay to prevent iframe from capturing mouse events */}
              {isResizing && (
                <div className="absolute inset-0 bg-transparent z-10"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StackedLayout>
  );
};

export default Page;
