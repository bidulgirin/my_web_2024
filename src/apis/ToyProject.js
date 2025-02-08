import supabase from '../lib/supabase';
// project 를 위한 supabase 함수

// project 데이터 가져오기
// 프로젝트 리스트 가져오기
export const getToyProjects = async () => {
    try {
        const { data, error } = await supabase
            .from('toys')
            .select('*')
            .is('deleted_at', null)
            .order('id', { ascending: false });

        if (error) throw new Error(error.message);

        return data;
    } catch (err) {
        console.error('프로젝트 불러오기 실패:', err);
        return null; // 또는 빈 배열 [] 반환 가능
    }
};

// project 데이터 id 로 가져오기
export const getToyProjectsById = async (id) => {
    const result = await supabase
        .from('toys')
        .select('*')
        .is('deleted_at', null)
        .eq('id', id);

    return result.data;
};
// project 서치해서 가져오기
export const getToyProjectsSearch = async (terms) => {
    const result = await supabase
        .from('toys')
        .select('*')
        .is('deleted_at', null)
        .ilike('content', `%${terms}%`)
        .order('id', { ascending: false })
        .limit(500);
    return result.data;
};
// createToyProjects
export const createToyProjects = async ({ title, desc, imgUrl, link }) => {
    const result = await supabase
        .from('toys')
        .insert({ title, desc, imgUrl, link })
        .select();

    return result.data;
};

// updateToyProjects
export const updateToyProjects = async ({ id, title, desc, imgUrl, link }) => {
    const result = await supabase
        .from('toys')
        .update({ title, desc, imgUrl, link })
        .eq('id', id)
        .select();

    return result.data;
};

// softDelete
export const deleteToyProjectSoft = async (id) => {
    const result = await supabase
        .from('toys')
        .update({
            deleted_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select();

    return result.data;
};
