import { modal } from "./modules/modal";
import { servicesModal } from "./modules/servicesModal";
import { sertificates } from "./modules/sertificates";
import { timer } from "./modules/timer";
import { form } from "./modules/form";
import { validation } from "./modules/validation";
import { calculator } from "./modules/calculator";



modal();
servicesModal();
sertificates();
timer("01 april 2022");
form({formId: "form1"});
form({formId: "form2"});
validation();
calculator();

