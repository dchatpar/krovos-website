declare module "@/public/images/image_manifest.json" {
  interface ImageMetadata {
    local_path: string;
    width: number;
    height: number;
    quality_score: number;
    relevance_score: number;
    category: string;
    source: string;
  }
  
  const value: ImageMetadata[];
  export default value;
}