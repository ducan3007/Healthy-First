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
  role:'admin',
  active: false,
  password: "a1c3s5e3ds",
  image: "https://secure.gravatar.com/avatar/?s=120&d=mp",
  fullname: "Nguyen Van A",
  birth: "19/02/2000",
  email: "nguyenvana@gmail.com",
  phone: "0987654321",
  cmnd: "123456789",
  work_area: [
    {
      city: "Ha Noi",
      district: "Quan Nam Tu Liem",
      code: "01D12345",
    },
    {
      city: "Ha Noi",
      district: "Quan Bac Tu Liem",
      code: "01D45e3",
    },
    {
      city: "Thanh pho Ho Chi Minh",
      district: "Quan Bac Tu Liem",
      code: "02D3e156e",
    },
  ],
};
