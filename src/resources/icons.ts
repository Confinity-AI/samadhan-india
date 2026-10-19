import type { IconComponent } from "@once-ui-system/core";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineBars3, HiOutlineCheck, HiOutlineDocumentDuplicate, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

declare module "@once-ui-system/core" {
  interface IconLibraryOverrides {
    phone: true;
    whatsapp: true;
    mapPin: true;
    menu: true;
    facebook: true;
    instagram: true;
    linkedin: true;
    copy: true;
    copied: true;
  }
}

export const appIcons: Record<string, IconComponent> = {
  phone: HiOutlinePhone,
  whatsapp: FaWhatsapp,
  mapPin: HiOutlineMapPin,
  menu: HiOutlineBars3,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  copy: HiOutlineDocumentDuplicate,
  copied: HiOutlineCheck,
};
