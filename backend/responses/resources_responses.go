package responses

type DailyCoinResponse struct {
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

type ResourcesResponse struct {
	Message string                 `json:"message"`
	Data    map[string]interface{} `json:"data"`
}
