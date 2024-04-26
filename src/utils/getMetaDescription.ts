export function getMetaDescription(
  description?: string,
  parentDescription?: string
) {
  if (description) {
    return description;
  }

  return parentDescription ?? "";
}
