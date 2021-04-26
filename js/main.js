    const cursor = document.querySelector(".cursor");
    const cursor_2 = document.querySelector(".cursor_2");
    const pos = document.documentElement;

    pos.addEventListener("mousemove", e => {
      pos.style.setProperty('--x', e.clientX + 'px');
      pos.style.setProperty('--y', e.clientY + 'px');
      cursor.style.cssText = cursor_2.style.cssText = "left: " + e.clientX +"px; top: " + e.clientY + "px;" ;
    })


