export type TrailerModalProps = {
  trailer: {
    isOpen: boolean;
    movieId: number;
  };
  onChangeTrailer: () => void;
};
