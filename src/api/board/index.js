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

const detail = async (idx) => {
    const res = await api.get(`/board/detail/${idx}`)
    return res.data;
}

const modify = async (idx, post) => {
    try {
        const res = await api.put(`/board/modify/${idx}`, post)

        if (res.status === 200) {
            alert("수정 성공")
        }
        return res.data
    } catch (e) {
        console.error(e)
        alert('수정 실패')
        throw e
    }

}

const remove = async (idx) => {
    try {
        const res = await api.delete(`/board/delete/${idx}`)

        if (res.status === 200) {
            alert("삭제 성공")
        }
        return res.data
    } catch (e) {
        console.error(e)
        alert('삭제 실패')
        throw e
    }
}

export default { create, list, detail, modify, remove }