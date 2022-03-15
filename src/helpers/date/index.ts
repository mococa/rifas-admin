export const parseDate = (date?: string, showHours?: boolean) =>
  showHours
    ? new Date(date || 0)
        .toLocaleString('pt-BR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
        .split(' ')
        .join(', ')
    : new Date(date || 0).toLocaleDateString('pt-BR');
