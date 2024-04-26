export const getMetaTitle = (title?: string, parentTitle?: string) => {
  if (title) {
    return `${title} | ${parentTitle}`;
  }

  return parentTitle ?? "";
};
