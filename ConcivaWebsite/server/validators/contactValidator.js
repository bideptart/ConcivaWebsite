export const validateContact = (payload) => {
  if (!payload?.name || !payload?.email || !payload?.message) {
    return false;
  }

  return true;
};
