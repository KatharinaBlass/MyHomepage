export type FileMap = Record<string, string>

// Helper to resolve project image URLs collected by Vite's import.meta.glob
const allImages = import.meta.glob('../graphics/projects/**', {
  eager: true,
  query: '?url',
  import: 'default',
}) as FileMap

export function getProjectFiles(folder: string): FileMap {
  const prefix = `../graphics/projects/${folder}/`
  const result: FileMap = {}
  for (const path in allImages) {
    if (path.startsWith(prefix)) {
      const filename = path.slice(prefix.length)
      result[filename] = allImages[path]
    }
  }
  return result
}

export function useProjectFiles(folder: string): FileMap {
  return getProjectFiles(folder)
}
