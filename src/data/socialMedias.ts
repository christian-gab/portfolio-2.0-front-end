import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface SocialMedia {
  name: string
  href: string
  icon: IconDefinition
}

const socialMedias: SocialMedia[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/christian-gab',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christiangdev',
    icon: faLinkedin,
  },
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&to=christiandeveloper123@gmail.com',
    icon: faEnvelope,
  },
]

export default socialMedias
