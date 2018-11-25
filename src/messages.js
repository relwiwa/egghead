export default {
  'en-US': {
    detail: {
      author: 'by {author}',
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
      reviewsHeading: 'Reviews',
      /*  What's going on:
          `#` will be replaced with `count`
          `=0` is for the case of `count === 0`, then `No Reviews Yet!` will be rendered
          `one` is for the case of `count === 1`, so the singular case
          `other` is for the case of `count > 1`, so the plural case */
      averageRating: 'Average Rating: {avg} ({count, plural, =0 {No Reviews Yet!} one {# Review} other {# Reviews}})',
      userRating: '{name} rated it: {rating} out of 5',
      window: '<small><em>All {numMerchants} links open in a new window.</em></small>',
      inputPlaceholder: 'What did you think? Enter your review here.'
    }
  },
  'es-ES': {
    detail: {
      author: 'de {author}',
      toggle: 'Palanca',
      purchase: 'Compre este libro de:',
      reviewsHeading: 'Comentarios',
      averageRating: 'Note moyenne: {avg} ({count, plural, =0 {Pas encore de commentaires!} one {# La revue} other {# Avis}})',
      userRating: '{name} clasificado: {rating} de 5',
      window: '<small><em>Los {numMerchants} enlaces se abren en una nueva ventana.</em></small>',
      inputPlaceholder: '¿Que piensas? Introduzca su comentario aquí.'
    }
  },
  'fr-FR': {
    detail: {
      author: 'par {author}',
      toggle:'Basculer',
      purchase: 'Achetez ce livre à partir de:',
      reviewsHeading: 'Avis',
      averageRating: 'Note moyenne: {avg}',
      userRating: '{name} L\'a noté: {rating} sur 5',
      window: '<small><em>Les {numMerchants} liens s\'ouvrent dans une nouvelle fenêtre.</em></small>',
      inputPlaceholder: 'Qu\'as-tu pensé? Entrez votre avis ici.'
    }
  }
}
