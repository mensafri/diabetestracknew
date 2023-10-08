<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$role)
    {
        $user_role = Auth::user()->role;
        if (in_array($user_role, $role)) {
            return $next($request);
        }

        return abort(401, "Anda tidak berhak mengakses halaman ini.");
    }
}
