export interface Social {
  name: string
  url: string
  placeholder: boolean
}

export const socials: Social[] = [
  { name: "Instagram", url: "https://www.instagram.com/innerpathagency/", placeholder: false },
  // TODO: confirm TikTok handle
  { name: "TikTok", url: "https://tiktok.com/@innerpathagency", placeholder: true },
  // TODO: confirm YouTube handle
  { name: "YouTube", url: "https://youtube.com/@innerpathagency", placeholder: true },
  // TODO: confirm X handle
  { name: "X", url: "https://x.com/innerpathagency", placeholder: true },
  // TODO: confirm LinkedIn handle
  { name: "LinkedIn", url: "https://linkedin.com/company/innerpathagency", placeholder: true },
  // TODO: confirm GitHub handle
  { name: "GitHub", url: "https://github.com/innerpathagency", placeholder: true },
]
