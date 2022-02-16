export const useCategories = () => {
  return useState('categories', () => [
    { id: 'head', title: 'Tête' },
    { id: 'body', title: 'Hauts' },
    { id: 'other', title: 'Autres' }
  ])
}