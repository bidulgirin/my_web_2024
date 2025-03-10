import supabase from '../lib/supabase';
// project 를 위한 supabase 함수

// project 데이터 가져오기
// 프로젝트 리스트 가져오기
export const getProjects = async () => {
    try {
        const { data, error } = await supabase
            .from('project')
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
export const getProjectsById = async (id) => {
    const result = await supabase
        .from('project')
        .select('*')
        .is('deleted_at', null)
        .eq('id', id);

    return result.data;
};
// project 서치해서 가져오기
export const getProjectsSearch = async (terms) => {
    const result = await supabase
        .from('project')
        .select('*')
        .is('deleted_at', null)
        .ilike('content', `%${terms}%`)
        .order('id', { ascending: false })
        .limit(500);
    return result.data;
};
// createProjects
export const createProjects = async ({ title, desc, imgUrl, link }) => {
    const result = await supabase
        .from('project')
        .insert({ title, desc, imgUrl, link })
        .select();

    return result.data;
};

// updateProjects
export const updateProjects = async ({ id, title, desc, imgUrl, link }) => {
    const result = await supabase
        .from('project')
        .update({ title, desc, imgUrl, link })
        .eq('id', id)
        .select();

    return result.data;
};

// softDelete
export const deleteProjectSoft = async (id) => {
    const result = await supabase
        .from('project')
        .update({
            deleted_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select();

    return result.data;
};
