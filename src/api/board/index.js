import api from '@/plugins/axiosinterceptor'

const list = async (req) => {
    const res = await api.get('/board/list', req)

    return res.data
}

export default { list }