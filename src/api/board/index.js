import api from '@/plugins/axiosinterceptor'

const create = async (post) => {
    try {
        const res = await api.post('/board/create', post)

        if (res.status === 200) {
            alert("등록 성공")
        }
    } catch (e) {
        console.error(e)
        alert('등록 실패')
    }

}

const list = async (req) => {
    const res = await api.get('/board/list', req)

    return res.data
}

export default { create, list }