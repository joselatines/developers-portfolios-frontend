export interface Email {
  value: string;
  type?: string;
}

export interface Photo {
  value: string;
}

export interface Name {
  familyName: string;
  givenName: string;
  middleName?: string;
}

export interface ProfilePassport {
  provider: string;
  id: string;
  displayName: string;
  username?: string;
  name?: Name;
  emails?: Email[];
  photos?: Photo[];
}
