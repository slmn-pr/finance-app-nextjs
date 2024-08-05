CREATE OR REPLACE FUNCTION fetch_transactions(
    range_arg VARCHAR default 'last30days',
    limit_arg INT default 20,
    offset_arg INT default 0
)
RETURNS SETOF transactions AS $$
DECLARE 
    startDate TIMESTAMP;
    endDate TIMESTAMP := NOW();
BEGIN
    CASE range_arg
        WHEN 'last24hours' THEN 
            startDate := NOW() - INTERVAL '1 day';
        WHEN 'last7days' THEN
            startDate := NOW() = INTERVAL '7 days';
        WHEN 'last30days' THEN 
            startDate := NOW() - INTERVAL '30 days';
        WHEN 'last12months' THEN
            startDate :=  NOW() - INTERVAL '12 months';
        ELSE 
            startDate := NOW() - INTERVAL '30 days'
    END CASE;

    RETURN QUERY SELECT * FROM transactions
    WHERE created_at >= startDate AND created_at <= endDate
    ORDER BY created_at DESC
    LIMIT limit_arg OFFSET offset_arg
END;
$$ LANGUAGE plpgsql;