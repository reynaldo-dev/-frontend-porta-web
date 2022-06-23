import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteOne, getAllRedes, postRedUsuario, putEditarLink, putEditarRed } from "../../api/redesUsuarioAPI";

export const useRedesUsuarios = () => {
  return useQuery(["Redes"], getAllRedes);
};

export const useDeleteUsuarioRed = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteOne, {
    onSuccess: () => {
      queryClient.invalidateQueries(["Redes"]);
    },
  });
};

export const useMutationRedUsuario = () => {
  const queryClient = useQueryClient();
  return useMutation(postRedUsuario, {
      onSuccess: () => {
          queryClient.invalidateQueries(["Redes"])
      }
  })
  
}

export const usePutEditarRed = () => {
  const queryClient = useQueryClient();
  return useMutation(putEditarRed, {
      onSuccess: () => {
          queryClient.invalidateQueries(["Redes"])
      }
  })
  
}

export const usePutEditarLink = () => {
  const queryClient = useQueryClient();
  return useMutation(putEditarLink, {
      onSuccess: () => {
          queryClient.invalidateQueries(["Redes"])
      }
  })
  
}
