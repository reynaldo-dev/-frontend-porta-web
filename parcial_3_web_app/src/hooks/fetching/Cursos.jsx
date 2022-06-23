import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteOne, getAll, postCertificacion, postCursoUsuario, updateCursoUsuario } from "../../api/certificacionAPI";


const key = 'Certificaciones';

export const useCursos = () => {
    return useQuery([key], getAll);
}

export const useMutationCurso = () => {
    const queryClient = useQueryClient();
    
    return useMutation(postCertificacion, {
        onSuccess: () => {
            queryClient.invalidateQueries([key])
        }
    })
}


export const useMutationCursoUsuario = () => {
    const queryClient = useQueryClient();
    return useMutation(postCursoUsuario, {
        onSuccess: () => {
            queryClient.invalidateQueries([key])
        }
    })
    
}

export const useMutationUpdateCurso = () => {
    const queryClient = useQueryClient();
    return useMutation(updateCursoUsuario, {
        onSuccess: () => {
            queryClient.invalidateQueries([key])
        }
    })
}

export const useDeleteCurso = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteOne, {
        onSuccess: () => {
            queryClient.invalidateQueries([key])
        }
    })
}