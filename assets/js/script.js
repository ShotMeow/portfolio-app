import { menuVisibility } from "./menu.js";
import { navigator } from "./navigator.js";
import { scroll } from "./scroll.js";

document.addEventListener('DOMContentLoaded', () => {
    menuVisibility()
    scroll()
    navigator()
})