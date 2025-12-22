import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export interface ProjectVideo {
  title: string;
  videoUrl: string;
  description: string;
  githubUrl: string;
  backgroundColor: string;
  textHeading: string;
}

export async function getProjectVideos(): Promise<ProjectVideo[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'projectVideo',
      order: ['fields.order'] as any,
    });

    return entries.items.map((item: any) => ({
      title: item.fields.title,
      videoUrl: item.fields.videoFile?.fields?.file?.url || '',
      description: item.fields.description,
      githubUrl: item.fields.githubUrl,
      backgroundColor: item.fields.backgroundColor,
      textHeading: item.fields.textHeading,
    }));
  } catch (error) {
    console.error('Error fetching project videos:', error);
    return [];
  }
}
