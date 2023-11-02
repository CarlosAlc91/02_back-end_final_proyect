//importar catchAsync


export const findAll = catchAsync(async(req, res, next) => {
    return res.status(200).json(/* valor a retornar */)
});

export const create = catchAsync(async(req, res, next) => {
    return res.status(201).json(/* valor a retornar */)
});

export const findOne = catchAsync(async(req, res, next) => {
    return res.status(200).json(/* valor a retornar */)
});

export const update = catchAsync(async(req, res, next) => {
    return res.status(200).json(/* valor a retornar */)
});

export const deletectrl = catchAsync(async(req, res, next) => {
    return res.status(200).json(/* valor a retornar */)
});