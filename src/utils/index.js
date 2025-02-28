export * from "./motion-utils";

export function isPathsAreEqual(pathname, itemPath) {
  return (
    pathname === itemPath || (itemPath !== "/" && pathname.includes(itemPath))
  );
}
