const createAccount = (id, image, fullname, birth, password, active, work_area) => {
  return { id, image, fullname, birth, password, active, work_area };
};

export const accounts = [
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    false,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
];

export const user_detail = {
  id: "user1234",
  role: "admin",
  active: false,
  password: "a1c3s5e3ds",
  image: "https://secure.gravatar.com/avatar/?s=120&d=mp",
  fullname: "Nguyen Van A",
  birth: new Date(),
  email: "nguyenvana@gmail.com",
  phone: "0987654321",
  work_area: [
    { title: "Quận Ba Đình", code: "01D001", city: "Thành phố Hà Nội" },
    { title: "Quận Ba Đình", code: "01D001", city: "Thành phố Hà Nội" },
    { title: "Thành phố Hà Giang", code: "02D024", city: "Tỉnh Hà Giang" },
  ],
};
