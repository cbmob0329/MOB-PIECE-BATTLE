export function missionEmblem(kind='star'){
 const shapes={star:'<path d="m32 9 7 15 17 2-12 12 3 17-15-8-15 8 3-17L8 26l17-2Z"/>',fusion:'<path d="m23 11 14 21-14 21L9 32Z"/><path d="m41 11 14 21-14 21-14-21Z"/>',shield:'<path d="M32 8 52 16v16c0 13-20 24-20 24S12 45 12 32V16Z"/><path d="m23 31 6 6 13-14" fill="none"/>',tower:'<path d="M16 54V24h32v30ZM12 24V10h9v7h7v-7h8v7h7v-7h9v14ZM27 54V40h10v14"/>',gift:'<path d="M12 28h40v27H12ZM8 19h48v11H8ZM32 19v36M32 19C10 19 15 2 24 8Zm0 0C54 19 49 2 40 8Z"/>'};
 return `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" class="mission-emblem"><g fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round">${shapes[kind]||shapes.star}</g></svg>`;
}
export function missionHomeButton(){return `<button class="home-menu-tile mission-entry" data-go="mission" aria-label="ミッション・報酬を受け取る"><span class="mission-entry-art">${missionEmblem()}<i>✦</i></span><b>MISSION</b><small>冒険のきろく</small></button>`;}
