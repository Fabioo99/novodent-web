// Catalog configuration for each brand
export const brandCatalogs: Record<string, string> = {
  'SAEVO BY GNATUS': '/catalogos/SAEVO BY GNATUS.pdf',
  'ANYCUBIC': '/catalogos/ANYCUBIC.pdf',
  'ORTHOMETRIC': '/catalogos/ORTHOMETRIC.pdf',
  'DTE': '/catalogos/DTE.pdf',
  'PANDA': '/catalogos/PANDA.pdf',
  'AJAX': '/catalogos/AJAX.pdf',
  'JINME': '/catalogos/JINME.pdf',
  'PRIZMA': '/catalogos/PRIZMA.pdf',
  'VOCO': '/catalogos/VOCO.pdf',
  'SPD': '/catalogos/SPD.pdf',
  'SHOFU': '/catalogos/SHOFU.pdf',
};

// Default catalog URL for brands without specific catalogs
export const defaultCatalogUrl = 'https://drive.google.com/drive/folders/1rmiHiEIzd_E7S9rUtD8seuzgM8LGawUz?usp=sharing';

// Get catalog URL for a specific brand
export const getCatalogUrl = (brandName: string): string => {
  return brandCatalogs[brandName] || defaultCatalogUrl;
};
