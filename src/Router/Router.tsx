import React from "react";

import AppLayout from "./AppLayout";
import ErrorPage from "./ErrorPage";
import type { RouteObject } from "react-router";

type PageComponentModule = {
  default: React.ComponentType<unknown>;
};

type PageMetaModule = {
  name: string;
  path: string;
};

const pageModules = import.meta.glob<PageComponentModule>(
  "/src/Router/Pages/**/**.tsx",
  { eager: true }
);

const metaModules = import.meta.glob<PageMetaModule>(
  "/src/Router/Pages/**/**.ts",
  { eager: true }
);

const getFolder = (path: string) => path.split("/").slice(0, -1).join("/");

const metaByFolder = Object.entries(metaModules).reduce((acc, [filePath, module]) => {
  const folder = getFolder(filePath);
  acc[folder] = module;
  return acc;
}, {} as Record<string, PageMetaModule>);

const routes = Object.entries(pageModules).map(([filePath, module]) => {
  const folder = getFolder(filePath);
  const meta = metaByFolder[folder];

  if (!meta) {
    throw new Error(`Missing meta file for ${filePath}. Expected meta inside ${folder}`);
  }

  return {
    path: meta.path,
    element: <module.default />,
  };
});

export const router: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: routes,
  }
]