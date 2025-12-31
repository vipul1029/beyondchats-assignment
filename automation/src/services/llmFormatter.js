/**
 * Simulates an LLM-based article enhancement
 * (Structure, tone, clarity inspired by top-ranking articles)
 */
export const generateUpdatedArticle = (
  title,
  competitorContents,
  competitorLinks
) => {
  let content = `# ${title}\n\n`;

  content +=
    "This article is an improved and reformatted version inspired by top-ranking resources on Google.\n\n";

  competitorContents.forEach((text, index) => {
    content += `## Key Insight ${index + 1}\n`;
    content += text.slice(0, 1200) + "\n\n";
  });

  content += "## References\n";
  competitorLinks.forEach(link => {
    content += `- ${link}\n`;
  });

  return content;
};
