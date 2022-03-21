import { modal } from "./modules/modal";
import { servicesModal } from "./modules/servicesModal";
import { sertificates } from "./modules/sertificates";
import { timer } from "./modules/timer";
import { form } from "./modules/form";
import { validation } from "./modules/validation";
import { calculator } from "./modules/calculator";
import { swiper } from "./modules/swiper";
import { scroll } from "./modules/scroll";
import { tabs } from "./modules/tabs";




modal();
servicesModal();
sertificates();
timer("01 april 2022");
form({formId: "form1",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});
form({formId: "form2",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});
validation();
calculator();
swiper();
scroll();
tabs();