const styles = (theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing.xs,
    flexDirection: 'row',
    display: 'inline-flex',
  },
  leftButtonsContainer: {
    marginRight: theme.spacing.unit,
    cursor: 'pointer',
  },
  backIconButton: {
    width: theme.icon.size,
    height: theme.icon.size,
  },
  backButton: {
    fontSize: theme.font.md,
  },
  settingsIconButton: {
    width: theme.icon.size,
    height: theme.icon.size,
  },
  settingsButton: {
    fontSize: 18,
  },
  locationContainer: {
    height: theme.icon.size,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  locationText: {
    fontSize: theme.font.md,
    fontWeight: 'bold',
  },
  networkButton: {
    minWidth: 0,
    minHeight: 0,
    padding: `0 ${theme.spacing.sm}`,
    color: theme.palette.text.primary,
    textTransform: 'none',
  },
});

export default styles;