# helper methods to be used in other files for api handling

def get_invalid_params(params: list, valid_params: list):
    """
    Returns all invalid parameters passed in by user through API call.

    :param params: list of the parameters pass in by user.
    :param valid_params: list of valid parameters that a user can provide.
    """
    invalid_params = []
    for param in params:
        if param not in valid_params:
            invalid_params.append(param)
    return invalid_params


def create_invalid_parameters_error_message(invalid_params: list):
    """
    Generates common error message for returning to users when they provide invalid parameters in API request
    :param invalid_params: list of invalid parameters to include in error message
    :return: error message
    """
    error_msg = "The following invalid parameter(s) were provided:"
    for param in invalid_params:
        error_msg = error_msg + ' ' + param + ','
    error_msg = error_msg.rstrip(error_msg[-1])
    return error_msg