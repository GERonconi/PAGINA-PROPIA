function autoExpand(field) {
    field.style.height = 'auto';  // Reseteamos la altura para calcular el nuevo valor
    field.style.height = (field.scrollHeight) + 'px';  // Ajustamos la altura según el contenido
  }