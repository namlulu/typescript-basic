{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    home: { title: 'HOME' },
    about: { title: 'ABOUT' },
    contact: { title: 'CONTACT' },
  };
}
