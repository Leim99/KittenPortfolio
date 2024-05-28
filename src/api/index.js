import request from '@/utils/request'
export function agent_Api(data) {
    return request({
        url: '/agentApi',
        method: 'post',
        data
    })
}
export function kslist(params) {
    return request({
        url: '/admin/doctor_dep' + params,
        method: 'get'
    })
}