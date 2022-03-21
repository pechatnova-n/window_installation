import { modal } from "./modules/modal";
import { servicesModal } from "./modules/servicesModal";
import { sertificates } from "./modules/sertificates";
import { timer } from "./modules/timer";
import { form } from "./modules/form";
import { validation } from "./modules/validation";
import { calculator } from "./modules/calculator";
import { swiper } from "./modules/swiper";
import { slider } from "./modules/slider";
import {scroll} from "./modules/scroll";




modal();
servicesModal();
sertificates();
timer("01 april 2022");
form({formId: "form1"});
form({formId: "form2"});
validation();
//calculator();
swiper();
slider();
scroll();