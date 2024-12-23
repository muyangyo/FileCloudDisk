package com.muyangyo.fileclouddisk.common.aspect.annotations;

import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface UserOperationLimit {
    String value();
}