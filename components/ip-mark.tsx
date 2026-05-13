import Image, { type ImageProps } from "next/image"

type IpMarkProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  alt?: string
}

export function IpMark({ alt = "InnerPath IP mark", sizes, ...props }: IpMarkProps) {
  return (
    <Image
      src="/images/innerpath-ip-transparent.png"
      alt={alt}
      width={765}
      height={698}
      sizes={sizes ?? "(max-width: 640px) 70vw, (max-width: 1024px) 20rem, 28rem"}
      {...props}
    />
  )
}
